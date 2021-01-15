const fakeToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

interface User {
  id: number;
  username: string;
  country: string;
}

const user: User = {
  id: 1,
  username: 'user',
  country: 'Poland',
};

export const login = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(fakeToken);
    }, 200);
  });
};

export const getUser = (token: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === fakeToken) {
        resolve(user);
      } else {
        reject(new TypeError('Invalid token.'));
      }
    }, 200);
  });
};
