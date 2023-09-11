import React from 'react'
import styles from './styles.module.scss'

interface Props {
    isUsed?: string;
    phone?: number;
    email?: string;
    name?: string;
    address?: string;
    job?: string;
    company?: string;
    familyAre?: string;
    familyName?: string;
    familyPhone?: number;
    whoAreYou?: string;
    kidName?: string;
    kidPhone?: number;
    school?: string;
    studyType?: string;
    amount?: number;
    duration?: string;
    ambassador_code?: string;
    anhChup?:string;
    anhChup135?:string;
    anhBan?:string;
    hinhChup?:string;
    anhChup24?:string;
    anhChup39?:string;

}
const CheckInfo = ({
    isUsed,
    phone,
    email,
    name,
    address,
    job,
    company,
    familyAre,
    familyName,
    familyPhone,
    whoAreYou,
    kidName,
    kidPhone,
    school,
    studyType,
    amount,
    duration,
    ambassador_code,
    anhChup,
    anhChup135,
    anhBan,
    hinhChup,
    anhChup24,
    anhChup39,
}: Props) => {

    return (
        <>
            <div className={styles.CheckInfo}>
                <div>
                    <br />
                    <div>
                        <h4>Thông tin cá nhân</h4>
                    </div>
                    <label>Bạn đã từng trả góp học phí tại Rootopia chưa?</label>
                    <div className={styles.value}>· {isUsed}</div>
                    <label>Số điện thoại:</label>
                    <div className={styles.value}>· {phone}</div>
                    <label>Email:</label>
                    <div className={styles.value}>· {email}</div>
                    <label>Họ tên:</label>
                    <div className={styles.value}>· {name}</div>
                    <label>Ảnh mặt trước CMND/CCCD của bạn:</label>
                    <div style={{width: '250px'}}>
                        <img src={anhChup} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                    </div>
                    <label>Ảnh mặt sau CMND/CCCD của bạn:</label>
                    <div style={{width: '250px'}}>
                        <img src={anhChup135} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                    </div>
                    <label>Hình chân dung với CMND/CCCD:</label>
                    <div style={{width: '250px'}}>
                        <img src={anhBan} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                    </div>
                    <label>Nơi ở hiện tại của bạn:</label>
                    <div className={styles.value}>· {address}</div>
                    {anhChup39? 
                    <div>
                        <label>Ảnh chụp 1 loại giấy tờ chứng minh nơi ở hiện tại:</label>
                        <div style={{width: '250px'}}>
                            <img src={anhChup39} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                        </div>
                    </div>
                    :null}
                    <label>Nghề nghiệp:</label>
                    <div className={styles.value}>· {job}</div>
                    <label>Nơi làm việc:</label>
                    <div className={styles.value}>· {company}</div>
                    <label>Người thân đó là:</label>
                    <div className={styles.value}>· {familyAre}</div>
                    <label>Họ tên người thân:</label>
                    <div className={styles.value}>· {familyName}</div>
                    <label>Số điện thoạn người thân:</label>
                    <div className={styles.value}>· {familyPhone}</div>
                </div>
                <div>
                    <br />
                    <div>
                        <h4>Thông tin người học</h4>
                    </div>
                    <label>Bạn đang cần trả góp học phí cho:</label>
                    <div className={styles.value}>· {whoAreYou}</div>
                    {kidName ?
                        <div>
                            <label>Họ tên người học:</label>
                            <div className={styles.value}>· {kidName}</div>
                        </div>
                        : null
                    }
                    { hinhChup ? 
                    <div>
                        <label>Ảnh chụp giấy khai sinh của người học:</label>
                        <div style={{width: '250px'}}>
                            <img src={hinhChup} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                        </div>
                    </div>
                    :
                    null}
                    {kidPhone ?
                        <div>
                            <label>Số điện thoại người học:</label>
                            <div className={styles.value}>· {kidPhone}</div>
                        </div>
                        : null
                    }
                </div>
                    <br />
                <div>
                    <div>
                        <h4>Thông tin học phí</h4>
                    </div>
                    <label>Trường học/ Trung tâm giáo dục bạn đăng ký:</label>
                    <div className={styles.value}>· {school}</div>
                    <label>Hình thức học:</label>
                    <div className={styles.value}>· {studyType}</div>
                    <label>Ảnh chụp thông báo đóng học phí phát hành bởi Cơ sở giáo dục:</label>
                    <div style={{width: '250px'}}>
                            <img src={anhChup24} alt="anhpreview" style={{width:'100%', padding: '16px'}}/>
                        </div>
                    <label>Số học phí cần trả góp:</label>
                    <div className={styles.value}>· {amount}</div>
                    <label>Kỳ hạn trả góp:</label>
                    <div className={styles.value}>· {duration}</div>
                    {ambassador_code ?
                        <div>
                            <label>Mã giới thiệu trường:</label>
                            <div className={styles.value}>· {ambassador_code}</div>
                        </div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default CheckInfo;