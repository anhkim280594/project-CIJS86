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
    anhChup?: string;
    anhChup135?: string;
    anhBan?: string;
    hinhChup71?: string;
    hinhChup72?: string;
    anhChup24?: string;
    anhChup39?: string;

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
    hinhChup71,
    hinhChup72,
    anhChup24,
    anhChup39,
}: Props) => {
    return (
        <>
            <div className={styles.CheckInfo}>
                <div>
                    <br />
                    <div>
                        <div style={{display:'flex'}}>
                            <h4>Thông tin cá nhân</h4>
                            <hr />
                        </div>
                        <br />
                        <div className={styles.groupInfo}>
                            <div className={styles.infoItem}>
                                <div>Bạn đã từng trả góp học phí tại Rootopia chưa?</div>
                                <div className={styles.value}>· {isUsed}</div>
                            </div>
                            <div className={styles.infoItem}>
                                <div>Số điện thoại:</div>
                                <div className={styles.value}>· {phone}</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Email:</div>
                            <div className={styles.value}>· {email}</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div>Họ tên:</div>
                            <div className={styles.value}>· {name}</div>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div>Nơi ở hiện tại của bạn:</div>
                        <div className={styles.value}>· {address}</div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Nghề nghiệp:</div>
                            <div className={styles.value}>· {job}</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div>Nơi làm việc:</div>
                            <div className={styles.value}>· {company}</div>
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Ảnh mặt trước CMND/CCCD của bạn:</div>
                            <div style={{ width: '250px' }}>
                                <img src={anhChup} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            <div>Ảnh mặt sau CMND/CCCD của bạn:</div>
                            <div style={{ width: '250px' }}>
                                <img src={anhChup135} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Hình chân dung với CMND/CCCD:</div>
                            <div style={{ width: '250px' }}>
                                <img src={anhBan} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                            </div>
                        </div>
                        <div className={styles.infoItem}>
                            {anhChup39 ?
                                <div>
                                    <div>Ảnh chụp 1 loại giấy tờ chứng minh nơi ở hiện tại:</div>
                                    <div style={{ width: '250px' }}>
                                        <img src={anhChup39} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                                    </div>
                                </div>
                                : null}
                        </div>
                    </div>
                    <div>Người thân đó là:</div>
                    <div className={styles.value}>· {familyAre}</div>
                    <div>Họ tên người thân:</div>
                    <div className={styles.value}>· {familyName}</div>
                    <div>Số điện thoạn người thân:</div>
                    <div className={styles.value}>· {familyPhone}</div>
                </div>
                <div>
                    <br />
                    <div style={{display:'flex'}}>
                        <h4>Thông tin người học</h4>
                        <hr />
                    </div>
                    <br />
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Bạn đang cần trả góp học phí cho:</div>
                            <div className={styles.value}>· {whoAreYou}</div>
                        </div>
                        <div className={styles.infoItem}>
                            {kidName ?
                                <div>
                                    <div>Họ tên người học:</div>
                                    <div className={styles.value}>· {kidName}</div>
                                </div>
                                :
                                <div>
                                    <div>Họ tên người học:</div>
                                    <div>· {name}</div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        {hinhChup71 ?
                            <div className={styles.infoItem}>
                                <div>Ảnh chụp giấy khai sinh của người học:</div>
                                <div style={{ width: '250px' }}>
                                    <img src={hinhChup71} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                                </div>
                            </div>
                            :
                            null}
                        {kidPhone ?
                            <div className={styles.infoItem}>
                                <div>Số điện thoại người học:</div>
                                <div className={styles.value}>· {kidPhone}</div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <br />
                <div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Trường học/ Trung tâm giáo dục bạn đăng ký:</div>
                            <div className={styles.value}>· {school}</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div>Hình thức học:</div>
                            <div className={styles.value}>· {studyType}</div>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <div>Ảnh chụp thông báo đóng học phí phát hành bởi Cơ sở giáo dục:</div>
                        <div style={{ width: '250px' }}>
                            <img src={anhChup24} alt="anhpreview" style={{ width: '100%', padding: '16px' }} />
                        </div>
                    </div>
                    <div className={styles.groupInfo}>
                        <div className={styles.infoItem}>
                            <div>Số học phí cần trả góp:</div>
                            <div className={styles.value}>· {amount}</div>
                        </div>
                        <div className={styles.infoItem}>
                            <div>Kỳ hạn trả góp:</div>
                            <div className={styles.value}>· {duration}</div>
                        </div>
                    </div>
                    {ambassador_code ?
                        <div className={styles.infoItem}>
                            <div>Mã giới thiệu trường:</div>
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