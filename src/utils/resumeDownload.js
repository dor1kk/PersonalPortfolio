// Resume download functionality
export const downloadResume = () => {
  // For now, this is a placeholder. In a real implementation, you would:
  // 1. Store your resume PDF in the public folder
  // 2. Create a link to download it
  
  // Example implementation:
  const resumeUrl = '/resume/Dorajet_Kukaj_Resume.pdf'; // Path to your resume in public folder
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'Dorajet_Kukaj_Resume.pdf';
  link.target = '_blank';
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Optional: Track download event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'resume_download', {
      event_category: 'engagement',
      event_label: 'resume_pdf'
    });
  }
};

// Alternative: Open resume in new tab
export const viewResume = () => {
  const resumeUrl = '/resume/Dorajet_Kukaj_Resume.pdf';
  window.open(resumeUrl, '_blank');
};

// Generate resume data (for dynamic generation if needed)
export const getResumeData = () => {
  return {
    name: 'Dorajet Kukaj',
    title: 'Junior Software Engineer',
    email: 'dorajetkukaj05@gmail.com',
    location: 'Kosovo',
    summary: 'Passionate Junior Software Engineer with experience in modern web technologies...',
    experience: [
      {
        title: 'Junior Software Engineer',
        company: 'Pabau Clinic Software',
        period: '2023 - Present',
        description: 'Contributing to large-scale health-tech platform...'
      }
    ],
    skills: ['React', 'Next.js', 'GraphQL', 'Prisma', 'Hasura', 'TypeScript'],
    projects: [
      'Rent A Car System',
      'Learning Management System',
      'E-commerce Platform'
    ]
  };
};
