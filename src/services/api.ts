// API service for career guidance platform

export const fetchCareerPaths = async () => {
  // Placeholder for API call
  return [
    { id: 1, title: 'Software Engineering', description: 'Build the future with code.' },
    { id: 2, title: 'Data Science', description: 'Uncover insights from data.' },
  ];
};

export const loginUser = async (credentials: any) => {
  // Placeholder for login API call
  console.log('Logging in with:', credentials);
  return { success: true, user: { name: 'Test User' } };
};
