import { useState } from 'react';
import { FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PdfThumbnailProps {
  url: string;
  className?: string;
  onClick?: () => void;
}

const PdfThumbnail = ({ url, className, onClick }: PdfThumbnailProps) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // PDFの1ページ目のみを表示
  const pdfUrl = `${url}#page=1&toolbar=0&navpanes=0&scrollbar=0&view=FitH`;

  if (hasError) {
    return (
      <div 
        className={cn(
          "w-full h-full bg-muted flex items-center justify-center cursor-pointer",
          className
        )}
        onClick={onClick}
      >
        <FileText className="w-8 h-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "relative w-full h-full overflow-hidden cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <FileText className="w-8 h-8 text-muted-foreground animate-pulse" />
        </div>
      )}
      <iframe
        src={pdfUrl}
        className="w-full h-full border-0 pointer-events-none"
        title="PDF Preview"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        style={{ 
          transform: 'scale(1)',
          transformOrigin: 'top left',
        }}
      />
    </div>
  );
};

export default PdfThumbnail;
