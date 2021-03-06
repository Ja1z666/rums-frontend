import { useState } from "react";
import { UserItemStyle, UserSubInfo } from "../../styles/mainStyle";

interface InputType{
    user: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
        role: string;
    }
}

export const UserItem = ({user}:InputType) => {
    const [subInfo, setSubInfo] = useState(false);

    return(
        <div className="userItem">
            <UserItemStyle onClick={() => setSubInfo(!subInfo)}>
                <p>{user.id}</p>
                <p>{user.username}</p>
                <p>{user.lastName}</p>
            </UserItemStyle>
            {
                subInfo && 
                <UserSubInfo>
                    <ul>
                        <li>Personālā  Informācija</li>
                        <li>Dzimums:</li>
                        <li>Vecums:</li>
                        <li>Kabinets:</li>
                        <li>Aktīvs:</li>
                    </ul>
                    <ul>
                        <li>Amtats</li>
                        <li>Profesija:</li>
                        <li>Darba sākums:</li>
                        <li>Pieredze:</li>
                        <li>Zināšanas:</li>
                    </ul>
                    <ul>
                        <li>Kontaktinformācija</li>
                        <li>Numurs:</li>
                        <li>Epasts:</li>
                        <li>Adrese:</li>
                        <li>Pasta indekss:</li>
                    </ul>
                    <ul>
                        <li>Inventars</li>
                        <li>Ip:</li>
                        <li>Mac address:</li>
                        <li>Sip:</li>
                    </ul>
                </UserSubInfo>
            }
        </div>
    )
}