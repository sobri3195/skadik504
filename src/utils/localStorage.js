export const storageKeys = {
  currentUser: 'fash_current_user',
  materiProgress: 'fash_materi_progress',
  videoProgress: 'fash_video_progress',
  simulationResults: 'fash_simulation_results',
  forumPosts: 'fash_forum_posts',
  assignmentSubmissions: 'fash_assignment_submissions',
  quizResults: 'fash_quiz_results',
  adminLogs: 'fash_admin_logs',
}

export const getStorage = (key, defaultValue) => {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : defaultValue
  } catch {
    return defaultValue
  }
}

export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const removeStorage = (key) => localStorage.removeItem(key)
export const clearFashStorage = () => Object.values(storageKeys).forEach((key) => localStorage.removeItem(key))
