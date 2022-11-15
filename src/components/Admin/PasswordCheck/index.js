import Card from "antd/lib/card/Card";
import Password from "antd/lib/input/Password";
import React, {useState} from "react";
import Admin from "..";
import './styles.css';

const PasswordCheck = () => {
 const [password, setPassword] = useState("");
  const correctPassword = "makebabieswithtaylor";

  return (
    <div>
        {
            password === correctPassword 
              ? 
            <Admin /> 
              :
            <Card className="enter-password">
              <h1>Enter Password</h1>
              <Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Card> 
        }
    </div>
  );
};

export default PasswordCheck;
