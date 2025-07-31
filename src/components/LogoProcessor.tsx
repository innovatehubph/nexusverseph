import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const LogoProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImageUrl, setProcessedImageUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const processNexusVerseLogo = async () => {
    setIsProcessing(true);
    
    try {
      // Fetch the current NexusVerse logo
      const response = await fetch('/lovable-uploads/be45be9f-d1cf-4463-abf3-b66753527282.png');
      const blob = await response.blob();
      
      // Load the image
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create URL for the processed image
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImageUrl(processedUrl);
      
      // Create a download link
      const downloadLink = document.createElement('a');
      downloadLink.href = processedUrl;
      downloadLink.download = 'nexusverse-logo-no-bg.png';
      downloadLink.click();
      
      toast({
        title: "Success!",
        description: "Background removed from NexusVerse logo. Image downloaded automatically.",
      });
      
    } catch (error) {
      console.error('Error processing logo:', error);
      toast({
        title: "Error",
        description: "Failed to process the logo. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 glass rounded-xl">
      <h3 className="text-xl font-semibold">Logo Background Remover</h3>
      <p className="text-gray-400 text-center">
        Click the button below to process the NexusVerse logo and remove its background
      </p>
      
      <Button 
        onClick={processNexusVerseLogo}
        disabled={isProcessing}
        className="button-gradient"
      >
        {isProcessing ? 'Processing...' : 'Remove Logo Background'}
      </Button>
      
      {processedImageUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Processed logo:</p>
          <img 
            src={processedImageUrl} 
            alt="NexusVerse Logo - Background Removed" 
            className="w-32 h-32 object-contain border border-white/10 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800"
          />
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;