import React, { useContext } from 'react';
import Log from '../component/Log'
import { UidContext } from '../component/AppContext';
import UpdateProfil from '../component/Profil/UpdateProfil';

const Profil = () => {
    const uid = useContext(UidContext)

    return (
        <div className='profil-page'>
            {uid ? (
                <UpdateProfil />
            ) : (


                <div className='log-container'>
                    <div className='img-container'>
                        <img src='./img/log.png' alt="img_log" />
                    </div>

                    <Log signIn={false} signUp={true} />

                </div>
            )
            }
        </div >
    );
};

export default Profil;



