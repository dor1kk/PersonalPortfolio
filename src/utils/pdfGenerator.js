import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Helper function to create a printable resume element
const createPrintableResume = (resumeData) => {
  const tempContainer = document.createElement('div');
  tempContainer.id = 'temp-resume-content';
  tempContainer.style.cssText = `
    position: absolute;
    top: -9999px;
    left: -9999px;
    width: 800px;
    background: white;
    font-family: 'Inter', 'Helvetica', sans-serif;
    color: #1f2937;
    padding: 40px;
    line-height: 1.6;
  `;

  tempContainer.innerHTML = `
    <div style="max-width: 800px; margin: 0 auto; background: white; color: #1f2937;">
      <!-- Header -->
      <div style="text-align: center; margin-bottom: 40px; border-bottom: 2px solid #e5e7eb; padding-bottom: 30px;">
        <h1 style="font-size: 36px; font-weight: bold; margin-bottom: 8px; color: #1f2937; margin: 0 0 8px 0;">
          ${resumeData.personal.name}
        </h1>
        <h2 style="font-size: 20px; color: #3b82f6; font-weight: 600; margin-bottom: 20px; margin: 0 0 20px 0;">
          ${resumeData.personal.title}
        </h2>

        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; font-size: 14px; color: #6b7280;">
          <div>📧 ${resumeData.personal.email}</div>
          <div>📱 ${resumeData.personal.phone}</div>
          <div>📍 ${resumeData.personal.location}</div>
          <div>🌐 ${resumeData.personal.website}</div>
          <div>💼 ${resumeData.personal.linkedin}</div>
          <div>⚡ ${resumeData.personal.github}</div>
        </div>
      </div>

      <!-- Professional Summary -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin: 0 0 15px 0;">
          Professional Summary
        </h3>
        <p style="color: #4b5563; line-height: 1.7; margin: 0;">
          ${resumeData.summary}
        </p>
      </div>

      <!-- Experience -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin: 0 0 15px 0;">
          Professional Experience
        </h3>
        ${resumeData.experience.map(exp => `
          <div style="margin-bottom: 30px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <h4 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 5px 0;">${exp.title}</h4>
                <p style="color: #3b82f6; font-weight: 500; margin: 0;">${exp.company} • ${exp.location}</p>
              </div>
              <div style="color: #6b7280; font-size: 14px;">
                📅 ${exp.period}
              </div>
            </div>
            <ul style="margin-left: 20px; color: #4b5563;">
              ${exp.achievements.map(achievement => `
                <li style="margin-bottom: 8px; font-size: 14px;">${achievement}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Education -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin: 0 0 15px 0;">
          Education
        </h3>
        ${resumeData.education.map(edu => `
          <div style="margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
              <div>
                <h4 style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0 0 5px 0;">${edu.degree}</h4>
                <p style="color: #10b981; font-weight: 500; margin: 0;">${edu.institution} • ${edu.location}</p>
              </div>
              <div style="color: #6b7280; font-size: 14px;">
                📅 ${edu.period}
              </div>
            </div>
            <ul style="margin-left: 20px; color: #4b5563;">
              ${edu.details.map(detail => `
                <li style="margin-bottom: 5px; font-size: 14px;">${detail}</li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Skills -->
      <div style="margin-bottom: 40px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin: 0 0 15px 0;">
          Technical Skills
        </h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">
          ${Object.entries(resumeData.skills).map(([category, skills]) => `
            <div>
              <h4 style="font-weight: 600; color: #1f2937; margin-bottom: 10px; text-transform: capitalize; margin: 0 0 10px 0;">
                ${category} Development
              </h4>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                ${skills.map(skill => `
                  <span style="font-size: 12px; background: #f3f4f6; color: #374151; padding: 4px 8px; border-radius: 4px; border: 1px solid #e5e7eb;">
                    ${typeof skill === 'object' ? skill.name : skill} ${typeof skill === 'object' ? `(${skill.level}%)` : ''}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Key Projects -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #1f2937; border-bottom: 1px solid #e5e7eb; padding-bottom: 5px; margin: 0 0 15px 0;">
          ⭐ Key Projects
        </h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          ${resumeData.projects.map(project => `
            <li style="color: #4b5563; margin-bottom: 15px; border: 1px solid #e5e7eb; padding: 10px; border-radius: 8px;">
              <div style="display: flex; justify-content: between; align-items: center; margin-bottom: 5px;">
                <span style="font-weight: bold; color: #1f2937; font-size: 16px;">${typeof project === 'object' ? project.name : project}</span>
                ${typeof project === 'object' && project.impact ? `<span style="color: #059669; font-size: 12px; font-weight: 500;">${project.impact}</span>` : ''}
              </div>
              ${typeof project === 'object' && project.description ? `<p style="font-size: 14px; color: #6b7280; margin: 5px 0;">${project.description}</p>` : ''}
              ${typeof project === 'object' && project.tech ? `
                <div style="margin-top: 5px;">
                  ${project.tech.map(tech => `<span style="font-size: 11px; background: #f3f4f6; color: #374151; padding: 2px 6px; border-radius: 3px; margin-right: 5px;">${tech}</span>`).join('')}
                </div>
              ` : ''}
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `;

  document.body.appendChild(tempContainer);
  return tempContainer;
};

export const generateResumePDF = async (resumeData = null) => {
  try {
    // Find the resume element
    let resumeElement = document.getElementById('resume-content');

    // If resumeData is provided, create a temporary printable version
    if (resumeData) {
      resumeElement = createPrintableResume(resumeData);
    }

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

    // Clean up temporary elements
    const tempElement = document.getElementById('temp-resume-content');
    if (tempElement) {
      document.body.removeChild(tempElement);
    }

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
