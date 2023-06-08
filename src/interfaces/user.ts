export interface User {
  login: string;
  id: number;
}

export interface ApiSearchUserResponse {
  total_count: number;
  incomplete_results: boolean;
  items: User[];
}

