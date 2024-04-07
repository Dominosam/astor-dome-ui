import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SplitScreen = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftPane = styled.div`
  flex: 1;
  background-image: linear-gradient(#009FC2, #0D0A0B);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RightPane = styled.div`
  flex: 1;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 400px; // Adjust based on your logo's size
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #A8DADC;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #457B9D;
  color: #FFFFFF;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #E63946;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #457B9D;
  font-size: 14px;
`;

const Link = styled.a`
  color: #457B9D;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
`;

const BottomButton = styled.button`
  border: none;
  background: none;
  color: #E63946;
  cursor: pointer;
  margin-top: 20px;
`;

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login attempt with:", username, password);
    // Here, integrate your authentication logic
    navigate('/dashboard');
  };

  return (
    <SplitScreen>
      <LeftPane>
        <Logo src={logo} alt="Logo" />
      </LeftPane>
      <RightPane>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Welcome back</h2>
          <Input
            type="email"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <CheckboxContainer>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember password
          </CheckboxContainer>
          <Button type="submit">Sign In</Button>
          <Link>Forgot password?</Link>
          <BottomButton>Sign Up</BottomButton>
        </LoginForm>
      </RightPane>
    </SplitScreen>
  );
};

export default LoginPage;
