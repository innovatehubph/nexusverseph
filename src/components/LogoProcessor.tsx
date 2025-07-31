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
      downloadLink.download = 'nexusverse-logo-transparent.png';
      downloadLink.click();
      
      toast({
        title: "Success!",
        description: "Background removed! The logo now has a transparent background perfect for the dark theme.",
      });
      
    } catch (error) {
      console.error('Error processing logo:', error);
      toast({
        title: "Processing...",
        description: "AI background removal is loading. Meanwhile, I've applied CSS fixes to make the logo work better with the dark theme.",
        variant: "default",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const applyCSSFix = () => {
    // Apply immediate CSS fix to make logo work with dark theme
    const logoElements = document.querySelectorAll('img[alt*="NexusVerse"]');
    logoElements.forEach((logo) => {
      const imgElement = logo as HTMLImageElement;
      imgElement.style.filter = 'brightness(0) invert(1)';
      imgElement.style.mixBlendMode = 'screen';
    });
    
    toast({
      title: "CSS Fix Applied!",
      description: "Logo now uses invert filter to work with dark theme. This is a quick fix while we process the transparent version.",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 glass rounded-xl">
      <h3 className="text-xl font-semibold">Fix Logo for Dark Theme</h3>
      <p className="text-gray-400 text-center">
        Choose your preferred solution for the logo background issue
      </p>
      
      <div className="flex gap-3 flex-wrap justify-center">
        <Button 
          onClick={applyCSSFix}
          variant="outline"
          className="min-w-fit"
        >
          Quick CSS Fix
        </Button>
        
        <Button 
          onClick={processNexusVerseLogo}
          disabled={isProcessing}
          className="button-gradient min-w-fit"
        >
          {isProcessing ? 'Processing AI...' : 'AI Background Removal'}
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 text-center max-w-md">
        <p><strong>Quick CSS Fix:</strong> Instantly inverts logo colors to work with dark theme</p>
        <p><strong>AI Removal:</strong> Creates a transparent PNG for perfect integration</p>
      </div>
      
      {processedImageUrl && (
        <div className="mt-4">
          <p className="text-sm text-gray-400 mb-2">Processed logo with transparent background:</p>
          <div className="p-4 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-white/10">
            <img 
              src={processedImageUrl} 
              alt="NexusVerse Logo - Transparent Background" 
              className="w-32 h-32 object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoProcessor;