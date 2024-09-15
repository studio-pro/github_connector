import axios from 'axios';

// GitHub API 기본 설정
const GITHUB_API_BASE_URL = 'https://api.github.com';
const TOKEN = 'YOUR_PERSONAL_ACCESS_TOKEN';  // personal access token을 여기에 삽입

// axios 인스턴스 생성
const api = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`
  }
});

// 사용자 레포지토리 목록 가져오기
async function getUserRepositories(username) {
  try {
    const response = await api.get(`/users/${username}/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
}