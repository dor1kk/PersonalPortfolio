import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const generateResumePDF = async () => {
  try {
    // Find the resume element
    const resumeElement = document.getElementById('resume-content');
    if (!resumeElement) {
      console.error('Resume element not found');
      return;
    }

    // Show loading state
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'pdf-loading';
    loadingDiv.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 9999; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        <div style="text-align: center;">
          <div style="margin-bottom: 20px;">Generating PDF...</div>
          <div style="width: 40px; height: 40px; border: 3px solid #16b7ea; border-top: 3px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto;"></div>
        </div>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
    document.body.appendChild(loadingDiv);

    // Configure html2canvas options for better quality
    const canvas = await html2canvas(resumeElement, {
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: resumeElement.scrollWidth,
      height: resumeElement.scrollHeight,
      onclone: (clonedDoc) => {
        // Remove any animations and transitions for PDF
        const clonedElement = clonedDoc.getElementById('resume-content');
        if (clonedElement) {
          clonedElement.style.animation = 'none';
          clonedElement.style.transition = 'none';
          // Remove any motion elements
          const motionElements = clonedElement.querySelectorAll('[style*="transform"]');
          motionElements.forEach(el => {
            el.style.transform = 'none';
          });
        }
      }
    });

    // Create PDF
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    // Calculate dimensions
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    
    // Calculate scaling to fit page while maintaining aspect ratio
    const widthRatio = pdfWidth / imgWidth;
    const heightRatio = pdfHeight / imgHeight;
    const ratio = Math.min(widthRatio, heightRatio);
    
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;
    
    // Center the image on the page
    const x = (pdfWidth - scaledWidth) / 2;
    const y = (pdfHeight - scaledHeight) / 2;

    // Add image to PDF
    pdf.addImage(imgData, 'PNG', x, y, scaledWidth, scaledHeight);

    // If content is too long, add multiple pages
    if (scaledHeight > pdfHeight) {
      const totalPages = Math.ceil(scaledHeight / pdfHeight);
      
      for (let i = 1; i < totalPages; i++) {
        pdf.addPage();
        const yOffset = -i * pdfHeight;
        pdf.addImage(imgData, 'PNG', x, y + yOffset, scaledWidth, scaledHeight);
      }
    }

    // Download the PDF
    pdf.save('Dorajet_Kukaj_Resume.pdf');

    // Remove loading indicator
    document.body.removeChild(loadingDiv);

    // Show success message
    showNotification('Resume downloaded successfully!', 'success');

  } catch (error) {
    console.error('Error generating PDF:', error);
    
    // Remove loading indicator if it exists
    const loadingDiv = document.getElementById('pdf-loading');
    if (loadingDiv) {
      document.body.removeChild(loadingDiv);
    }
    
    showNotification('Error generating PDF. Please try again.', 'error');
  }
};

// Simple notification system
const showNotification = (message, type = 'info') => {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.textContent = message;
  
  // Add animation styles
  if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => {
      if (notification.parentNode) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
};

// Alternative method using print API
export const printResume = () => {
  // Hide everything except resume
  const resumeElement = document.getElementById('resume-content');
  if (!resumeElement) {
    showNotification('Resume not found', 'error');
    return;
  }

  // Create print styles
  const printStyles = `
    @media print {
      body * {
        visibility: hidden;
      }
      #resume-content, #resume-content * {
        visibility: visible;
      }
      #resume-content {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        background: white !important;
      }
      /* Remove animations and transitions for print */
      * {
        animation: none !important;
        transition: none !important;
        transform: none !important;
      }
    }
  `;

  // Add print styles
  const styleSheet = document.createElement('style');
  styleSheet.textContent = printStyles;
  document.head.appendChild(styleSheet);

  // Trigger print
  window.print();

  // Remove print styles after printing
  setTimeout(() => {
    document.head.removeChild(styleSheet);
  }, 1000);
};
