
import React, { ReactElement, useState, useRef } from 'react'
import Button from '../Button'
import Input from '../Input'
import styles from './styles.module.scss'
import schools from '../../constants/schools'
import durations from '../../constants/duration'
import InputSuggestion from '../InputSuggestion'
import CheckInfo from './CheckInfo'
import SamplePhotosUploader from '../../components/UploadPhoto'
import BackIcon from '../../icons/BackIcon'

export default function Form(): ReactElement {
  const contactFormRef = useRef(null)
  const [school, setSchoolValue] = useState(null)
  const [name, setNameValue] = useState(null)
  const [job, setJobValue] = useState(null)
  const [company, setCompanyValue] = useState(null)
  const [address, setAddressValue] = useState(null)
  const [kidName, setKidNameValue] = useState(null)
  const [kidPhone, setKidPhoneValue] = useState(null)
  const [amount, setAmountValue] = useState(null)
  const [duration, setDurationValue] = useState(null)
  const [ambassador_code, setAmbassadorCodeValue] = useState(null)
  const [other, setotherValue] = useState(null)
  const [familyAre, setFamilyAreValue] = useState(null)
  const [selectedFamilyAre, setSelectedFamilyAre] = useState(null);
  const [familyName, setFamilyNameValue] = useState(null)
  const [familyPhone, setFamilyPhoneValue] = useState(null)
  const [phone, setPhoneValue] = useState(undefined)
  const [email, setEmailValue] = useState(null)
  const [whoAreYou, setWhoareYouValue] = useState('Con bạn')
  const [selectedWhoareYou, setSelectedWhoareYou] = useState(null);
  const [studyType, setStudyTypeValue] = useState(null)
  const [selectedStudyType, setSelectedStudyType] = useState(null);
  const [isUsed, setisUsedValue] = useState(null)
  const [selectedIsUsed, setSelectedIsUsed] = useState(null);
  const [nameError, setNameError] = useState(null)
  const [jobError, setJobError] = useState(null)
  const [companyError, setCompanyError] = useState(null)
  const [addressError, setAddressError] = useState(null)
  const [kidNameError, setKidNameError] = useState(null)
  const [amountError, setAmountError] = useState(null)
  const [otherError, setotherError] = useState(null)
  const [familyNameError, setFamilyNameError] = useState(null)
  const [familyPhoneError, setFamilyPhoneError] = useState(null)
  const [phoneError, setPhoneError] = useState(null)
  const [emailError, setEmailError] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [isShowMessInstallmentPayment, setShowMessInstallmentPayment] = useState(false)
  const [isShowInputInfoSon, setShowInputInfoSon] = useState(true)
  const [isShowInputInfoSeft, setShowInputInfoSeft] = useState(false)
  const [isShowInputInfoOthers, setShowInputInfoOthers] = useState(false)
  const [isShowPage1, setShowPage1] = useState(true)
  const [isShowPage2, setShowPage2] = useState(false)
  const [isShowPage3, setShowPage3] = useState(false)
  const [isShowPage4, setShowPage4] = useState(false)
  const [isShowPage5, setShowPage5] = useState(false)
  const [anhChup, setAnhChup] = useState(null)
  const [fileAnhChup, setFileAnhChup] = useState(null)
  const [previewAnhChup, setpreviewAnhChup] = useState(null)
  const [anhChup135, setAnhChup135] = useState(null)
  const [fileAnhChup135, setFileAnhChup135] = useState(null)
  const [previewAnhChup135, setpreviewAnhChup135] = useState(null)
  const [anhBan, setAnhBan] = useState(null)
  const [fileAnhBan, setFileAnhBan] = useState(null)
  const [previewAnhBan, setpreviewAnhBan] = useState(null)
  const [hinhChup71, setHinhChup71] = useState(null)
  const [fileHinhChup71, setFileHinhChup71] = useState(null)
  const [previewHinhChup71, setpreviewHinhChup71] = useState(null)
  const [hinhChup72, setHinhChup72] = useState(null)
  const [fileHinhChup72, setFileHinhChup72] = useState(null)
  const [previewHinhChup72, setpreviewHinhChup72] = useState(null)
  const [anhChup24, setAnhChup24] = useState(null)
  const [fileanhChup24, setFileanhChup24] = useState(null)
  const [previewanhChup24, setpreviewanhChup24] = useState(null)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    validateName()
    validatePhone()
    validateEmail()
    validateJob()
    validateCompany()
    validateAddress()
    validateAmount()
    validateFamilyName()
    validateFamilyPhone()
    const isValid = validateName()
    validatePhone() &&
      validateEmail() &&
      validateJob() &&
      validateCompany() &&
      validateAddress() &&
      validateAmount() &&
      validateFamilyName() &&
      validateFamilyPhone()

    if (isValid) {
      setLoading(true)
      try {
        const response = await fetch(`https://envwnz849j7j.x.pipedream.net`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Accept-Language': 'vi',
            },
            body: JSON.stringify({
              school,
              name,
              email,
              phone,
              job,
              company,
              address,
              kidName,
              kidPhone,
              amount,
              duration,
              ambassador_code,
              familyAre,
              familyName,
              familyPhone,
              whoAreYou,
              studyType,
              isUsed,
              anhChup,
              anhChup135,
              anhBan,
              hinhChup71,
              hinhChup72,
              anhChup24,
            })
          })
        setLoading(false)
        if (response.status === 200) {
          setShowPage4(false)
          setShowPage5(true)
          contactFormRef?.current?.reset()
          setisUsedValue(null)
          setPhoneValue(undefined)
          setEmailValue(null)
          setNameValue(null)
          setAddressValue(null)
          setJobValue(null)
          setCompanyValue(null)
          setKidNameValue(null)
          setKidPhoneValue(null)
          setAmountValue(null)
          setSchoolValue(null)
          setWhoareYouValue(null)
          setotherValue(null)
          setDurationValue(null)
          setAmbassadorCodeValue(null)
          setFamilyAreValue(null)
          setFamilyNameValue(null)
          setFamilyPhoneValue(null)
          return true
        }
        const data = response?.headers?.get('content-type')?.startsWith('application/json') ? await response.json() : Promise.resolve({})
        const error = data?.errors?.length ? data.errors[0].msg : ''
        handleDisplayMessage(error || 'Bạn vui lòng nhập thông tin để xem kết quả', false)
      } catch (error) {
        console.log(error)
      }
    }
    else {
      handleDisplayMessage('Bạn vui lòng nhập thông tin để liên hệ', false)
      return false
    }
  }

  const handleDisplayMessage = (message, isSuccess) => {
    if (isSuccess) {
      setSuccessMessage(message)
    } else {
      setErrorMessage(message)
    }
    const interval = setInterval(() => {
      setSuccessMessage(null)
      setErrorMessage(null)
      if (isSuccess) {
      }
    }, 6000)
    return () => {
      clearInterval(interval);
    };
  }
  const validateName = () => {
    if (!name) {
      setNameError('Bạn vui lòng nhập họ và tên')
      return false
    } else {
      setNameError(null)
    }
    return true
  }
  const validateJob = () => {
    if (!job) {
      setJobError('Bạn vui lòng nhập nghề nghiệp của mình')
      return false
    } else {
      setJobError(null)
    }
    return true
  }
  const validateCompany = () => {
    if (!company) {
      setCompanyError('Bạn vui lòng nhập nơi làm việc')
      return false
    } else {
      setCompanyError(null)
    }
    return true
  }

  const validateAddress = () => {
    if (!address) {
      setAddressError('Bạn vui lòng nhập nơi ở hiện tại')
      return false
    } else {
      setAddressError(null)
    }
    return true
  }

  const validateKidName = () => {
    if (!kidName) {
      setKidNameError('Bạn vui lòng tên người đi học')
      return false
    } else {
      setKidNameError(null)
    }
    return true
  }

  const validateAmount = () => {
    if (!amount) {
      setAmountError('Vui lòng nhập số tiền muốn trả góp')
      return false
    } else {
      setAmountError(null)
    }
    return true
  }

  const validateother = () => {
    if (!other) {
      setotherError('Vui lòng nhập mối quan hệ người đó với bạn')
      return false
    } else {
      setotherError(null)
    }
    return true
  }
  const validateFamilyName = () => {
    if (!familyName) {
      setFamilyNameError('Vui lòng nhập tên người thân của bạn')
      return false
    } else {
      setFamilyNameError(null)
    }
    return true
  }
  const validateFamilyPhone = () => {
    if (!familyPhone) {
      setFamilyPhoneError('Vui lòng nhập số điện thoại người thân của bạn')
      return false
    } else {
      setFamilyPhoneError(null)
    }
    return true
  }

  const validatePhone = () => {
    if (!phone) {
      setPhoneError('Bạn vui lòng nhập số điện thoại')
      return false
    } else {
      setPhoneError(null)
    }
    return true
  }

  const validateEmail = () => {
    if (!email) {
      setEmailError('Bạn vui lòng nhập địa chỉ email')
      return false
    } else {
      setEmailError(null)
    }
    return true
  }
  const durationData = durations?.map(item => {
    return {
      value: item.month,
      id: item.id
    }
  })
  const schoolData = schools?.map(item => {
    return {
      value: item.schoolName,
      id: item.id
    }
  })

  const handleChangeSchool = (value) => {
    setSchoolValue(value)
  }
  const handleChangeDuration = (value) => {
    setDurationValue(value)
  }

  const isShowMess = (e) => {
    setShowMessInstallmentPayment(true)
    setisUsedValue(e.target.value)
    setSelectedIsUsed(e.target.value)
  }
  const isNotShowMess = (e) => {
    setShowMessInstallmentPayment(false)
    setisUsedValue(e.target.value)
    setSelectedIsUsed(e.target.value)
  }

  const showInputInfoSon = (e) => {
    setShowInputInfoSon(true)
    setShowInputInfoSeft(false)
    setShowInputInfoOthers(false)
    setWhoareYouValue(e.target.value)
    setSelectedWhoareYou(e.target.value)
  }
  const showInputInfoSeft = (e) => {
    setShowInputInfoSeft(true)
    setShowInputInfoSon(false)
    setShowInputInfoOthers(false)
    setWhoareYouValue(e.target.value)
    setSelectedWhoareYou(e.target.value)
  }
  const showInputInfoOthers = (e) => {
    setShowInputInfoOthers(true)
    setShowInputInfoSeft(false)
    setShowInputInfoSon(false)
    setWhoareYouValue(e.target.value)
    setSelectedWhoareYou(e.target.value)
  }

  const handleFamilyAre = (e) => {
    setFamilyAreValue(e.target.value)
    setSelectedFamilyAre(e.target.value)
  }
  const handleStudyType = (e) => {
    setStudyTypeValue(e.target.value)
    setSelectedStudyType(e.target.value)
  }

  const onClickNextPage2 = () => {
    setShowPage1(false)
    setShowPage2(true)
  }
  const onClickBackPage1 = () => {
    setShowPage1(true)
    setShowPage2(false)
  }
  const onClickNextPage3 = () => {
    setShowPage2(false)
    setShowPage3(true)
  }
  const onClickBackPage2 = () => {
    setShowPage2(true)
    setShowPage3(false)
  }
  const onClickNextPage4 = () => {
    setShowPage3(false)
    setShowPage4(true)
  }
  const onClickBackPage3 = () => {
    setShowPage3(true)
    setShowPage4(false)
  }

  const isDisabled = () => {
    if ((phone && name && job && email && company && school && address && amount && familyName && familyPhone && duration) == null)
      return true
  }
  const onViewHomePage = () => {
    window.location.reload();
  }
  return (
    <>
      <div className={styles.Wrapper}>
        <form ref={contactFormRef}
          className={styles.contactForm}
          onSubmit={handleSubmit}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src="/Rootopia-logo@x3.png" alt="logo" />
          </div>
          <div className={styles.title}><span>Chào mừng bạn đến với <span style={{ color: '#F476A7' }}>Rootopia</span></span></div>
          <div style={{ display: isShowPage1 ? 'block' : 'none' }}>
            <div>
              <div style={{ justifyContent: 'start', marginBottom: '16px' }}>
                Bạn đã từng trả góp học phí tại Rootopia chưa?
              </div>
              <div className={styles.radio}>
                <input type="radio" name='installmentPayment' value='Chưa, đây là lần đầu tiên' onClick={isNotShowMess} checked={selectedIsUsed === 'Chưa, đây là lần đầu tiên'} />
                <label>Chưa, đây là lần đầu tiên</label>
              </div>
              <div className={styles.radio}>
                <input type="radio" name='installmentPayment' value='Đã từng' onClick={isShowMess} checked={selectedIsUsed === 'Đã từng'} />
                <label>Đã từng</label>
              </div>
              {isShowMessInstallmentPayment ?
                <p className={styles.note}>· Nếu bạn đã từng trả góp Rootopia, vui lòng nhập <span style={{ color: '#F476A7', fontSize: '14px' }}>số điện thoại</span> bạn dùng để đăng ký trước đây.</p>
                : null
              }
              <br />
              <div className={styles.groupBox}>
                <div className={styles.groupItemBox}>
                  <span>Số điện thoại</span>
                  <Input
                    type='number'
                    placeholder={'Số điện thoại'}
                    name='q5_phone'
                    value={phone}
                    className={styles.inputBox}
                    onChange={setPhoneValue}
                    onBlur={validatePhone}
                  />
                  <div role='alert' className={styles.errorMsg}>{phoneError}</div>
                </div>
                <div className={styles.groupItemBox}>
                  <span>Email</span>
                  <Input
                    type='email'
                    placeholder={'Email'}
                    name='email'
                    value={email}
                    className={styles.inputBox}
                    onChange={setEmailValue}
                    onBlur={validateEmail}
                  />
                  <div role='alert' className={styles.errorMsg}>{emailError}</div>
                </div>
              </div>
            </div>
            <Button
              text={'Tiếp tục'}
              className={styles.submitBtn}
              onClick={onClickNextPage2}
              disabled={false}
              loading={false}
            />
          </div>
          <div style={{ display: isShowPage2 ? 'block' : 'none' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '18px', cursor: 'pointer', margin: '0 8px' }}>
                <span
                  onClick={onClickBackPage1}
                >
                  <BackIcon color="#080C21" />
                </span>
              </div>
              <h3 className={styles.titlePages}>Đăng ký bảo trợ</h3>
            </div>
            <br />
            <div>
              <div className={styles.groupBox}>
                <div className={styles.groupItemBox}>
                  <span>{'Họ và tên'}</span>
                  <Input
                    type='text'
                    placeholder={'Họ và tên'}
                    name='name'
                    value={name}
                    className={styles.inputBox}
                    onChange={setNameValue}
                    onBlur={validateName}
                  />
                  <div role='alert' className={styles.errorMsg}>{nameError}</div>
                </div>
                <div className={styles.groupItemBox}>
                  <span>Nghề nghiệp</span>
                  <Input
                    type='text'
                    placeholder={'Nghề nghiệp'}
                    name='job'
                    value={job}
                    className={styles.inputBox}
                    onChange={setJobValue}
                    onBlur={validateJob}
                  />
                  <div role='alert' className={styles.errorMsg}>{jobError}</div>
                </div>
              </div>
              <div className={styles.groupBox}>
                <div className={styles.groupItemBox}>
                  <p className={styles.note}>· Ghi tên hoặc website công ty hoặc ghi <span style={{ color: '#F476A7', fontSize: '14px' }}>làm tại nhà</span> nếu có cửa hàng, xưởng tại nhà</p>
                  <div>
                    <span>Nơi làm việc</span>
                    <Input
                      type='text'
                      placeholder={'Nơi làm việc'}
                      name='company'
                      value={company}
                      className={styles.inputBox}
                      onChange={setCompanyValue}
                      onBlur={validateCompany}
                    />
                    <div role='alert' className={styles.errorMsg}>{companyError}</div>
                  </div>
                </div>
                <div className={styles.groupItemBox}>
                  <p className={styles.note}>· Vui lòng điền đủ: Số nhà, Xã/Phường, Huyện/Quận, Tỉnh/Thành phố</p>
                  <div>
                    <span>Nơi ở hiện tại</span>
                    <Input
                      type='text'
                      placeholder={'Nơi ở hiện tại'}
                      name='address'
                      value={address}
                      className={styles.inputBox}
                      onChange={setAddressValue}
                      onBlur={validateAddress}
                    />
                    <div role='alert' className={styles.errorMsg}>{addressError}</div>
                  </div>
                </div>
              </div>
              <div className={styles.containerChooseSchool}>
                <label className={styles.sponsorInfoLabel}>Hãy điền tên trường bạn muốn được bảo trợ</label>
                <InputSuggestion
                  type='text'
                  name='school'
                  listId='schoolList'
                  id='school'
                  value={school}
                  className={styles.suggestionInput}
                  placeholder={'Hãy chọn/nhập trường'}
                  data={schoolData}
                  onChange={handleChangeSchool}
                />
              </div>
              <div className={styles.groupBox}>
                <div className={styles.groupItemBox}>
                  <label>
                    Mặt trước CMND/CCCD
                  </label>
                  <div>
                    <SamplePhotosUploader
                      onDataChange={v => setAnhChup(v)}
                      initialFiles={fileAnhChup}
                      setFiles={v => setFileAnhChup(v)}
                      setpreviewURL={v => setpreviewAnhChup(v)}
                    />
                  </div>
                </div>
                <div className={styles.groupItemBox}>
                  <label>
                    Mặt sau CMND/CCCD
                  </label>
                  <div>
                    <SamplePhotosUploader
                      onDataChange={v => setAnhChup135(v)}
                      initialFiles={fileAnhChup135}
                      setFiles={v => setFileAnhChup135(v)}
                      setpreviewURL={v => setpreviewAnhChup135(v)}
                    />
                  </div>
                </div>
              </div>
              <div className={styles.groupItemBox1}>
                <label>
                  Hình chân dung CMND/CCCD
                </label>
                <div>
                  <SamplePhotosUploader
                    onDataChange={v => setAnhBan(v)}
                    initialFiles={fileAnhBan}
                    setFiles={v => setFileAnhBan(v)}
                    setpreviewURL={v => setpreviewAnhBan(v)}
                  />
                </div>
              </div>

              <Button
                text={'Tiếp tục'}
                className={styles.submitBtn}
                onClick={onClickNextPage3}
                disabled={false}
                loading={false}
              />
            </div>
          </div >
          <div style={{ display: isShowPage3 ? 'block' : 'none' }}>
            <div>
              <div style={{ display: 'flex' }}>
                <div style={{ width: '18px', cursor: 'pointer', margin: '0 8px' }}>
                  <span
                    onClick={onClickBackPage2}
                  >
                    <BackIcon color="#080C21" />
                  </span>
                </div>
                <h3 className={styles.titlePages}>Đăng ký bảo trợ</h3>
              </div>
              <br />
              <h3 style={{ marginBottom: '8px' }}>Thông tin người học</h3>
              <div>
                <span>Bạn cần trả góp học phí cho</span>
                <div className={styles.radio}>
                  <input type="radio" id='whoAreYou' name='whoAreYou' value='Con bạn' onClick={showInputInfoSon} checked={selectedWhoareYou === 'Con bạn'} />
                  <label>Con bạn</label>
                </div>
                <div className={styles.radio}>
                  <input type="radio" id='whoAreYou' name='whoAreYou' value='Bản thân' onClick={showInputInfoSeft} checked={selectedWhoareYou === 'Bản thân'} />
                  <label>Bản thân</label>
                </div>
                <div className={styles.radio}>
                  <input type="radio" id='whoAreYou' name='whoAreYou' value='Người khác' onClick={showInputInfoOthers} checked={selectedWhoareYou === 'Người khác'} />
                  <label>Người khác</label>
                </div>
              </div>
              {
                isShowInputInfoSon ?
                  <div>
                    <div className={styles.groupBox}>
                      <div className={styles.groupItemBox}>
                        <span>Họ tên của người học</span>
                        <Input
                          type='text'
                          placeholder={'Họ tên của người học'}
                          name='kidName'
                          value={kidName}
                          className={styles.inputBox}
                          onChange={setKidNameValue}
                          onBlur={validateKidName}
                        />
                        <div role='alert' className={styles.errorMsg}>{kidNameError}</div>
                      </div>
                      <div className={styles.groupItemBox}>
                        <span>Số điện thoại của người học (nếu có)</span>
                        <Input
                          type='number'
                          placeholder={'Số điện thoại của người học (nếu có)'}
                          name='kidPhone'
                          value={kidPhone}
                          className={styles.inputBox}
                          onChange={setKidPhoneValue}
                        />
                      </div>
                    </div>
                    <div className={styles.groupBox}>
                      <div className={styles.groupItemBox}>
                        <label>Hình chụp giấy khai sinh của người học</label>
                        <SamplePhotosUploader
                          onDataChange={v => setHinhChup71(v)}
                          initialFiles={fileHinhChup71}
                          setFiles={v => setFileHinhChup71(v)}
                          setpreviewURL={v => setpreviewHinhChup71(v)}
                        />
                        <div></div>
                      </div>
                      <div className={styles.groupItemBox}>
                        <label>Ảnh chụp chân dung người học</label>
                        <SamplePhotosUploader
                          onDataChange={v => setHinhChup72(v)}
                          initialFiles={fileHinhChup72}
                          setFiles={v => setFileHinhChup72(v)}
                          setpreviewURL={v => setpreviewHinhChup72(v)}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '8px' }}> Thông tin học phí</h3>
                    </div>
                    <div>
                      <label>Trường học/ Trung tâm giáo dục bạn đăng ký</label>
                      <div style={{ background: '#E4E6EC', border: 'none', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>{school}</div>
                    </div>
                    <div>
                      <p>Hình thức học</p>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học trực tiếp tại lớp học' onChange={handleStudyType} checked={selectedStudyType === 'Học trực tiếp tại lớp học'} />
                        <label>Học trực tiếp tại lớp học</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học online' onChange={handleStudyType} checked={selectedStudyType === 'Học online'} />
                        <label>Học online</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học kết hợp online và trực tiếp' onChange={handleStudyType} checked={selectedStudyType === 'Học kết hợp online và trực tiếp'} />
                        <label>Học kết hợp online và trực tiếp</label>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <label>Ảnh chụp thông báo đóng học phí phát hành bởi Cơ sở giáo dục</label>
                      <SamplePhotosUploader
                        onDataChange={v => setAnhChup24(v)}
                        initialFiles={fileanhChup24}
                        setFiles={v => setFileanhChup24(v)}
                        setpreviewURL={v => setpreviewanhChup24(v)}
                      />
                      <p className={styles.note}>· Thể hiện rõ: Ngân hàng, Chi nhánh, Số tài khoản, Tên người thụ hưởng, Nội dung chuyển khoản.</p>
                    </div>
                    <br />
                    <div>
                      <span>Số tiền học phí cần trả góp</span>
                      <Input
                        type='number'
                        placeholder={'Số tiền học phí cần trả góp'}
                        name='amount'
                        value={amount}
                        className={styles.inputBox}
                        onChange={setAmountValue}
                        onBlur={validateAmount}
                      />
                      <div role='alert' className={styles.errorMsg}>{amountError}</div>
                      <p className={styles.note}>· Rootopia sẽ giải ngân học phí vào tài khoản của Cơ Sở Giáo Dục. Vui lòng KHÔNG nhập nhiều hơn số tiền trên thông báo học phí.</p>
                    </div>
                    <br />
                    <div>
                      <label>Kỳ hạn trả góp</label>
                      <InputSuggestion
                        type='text'
                        name='duration'
                        listId='durationList'
                        id='duration'
                        value={duration}
                        className={styles.suggestionInput}
                        placeholder={'Hãy chọn kỳ hạn trả'}
                        data={durationData}
                        onChange={handleChangeDuration}
                      />
                    </div>
                    <div>
                      <span>Mã giới thiệu trường</span>
                      <Input
                        type='number'
                        placeholder={'Mã giới thiệu trường'}
                        name='ambassador_code'
                        value={ambassador_code}
                        className={styles.inputBox}
                        onChange={setAmbassadorCodeValue}
                      />
                    </div>
                  </div>
                  : null
              }
              {
                isShowInputInfoSeft ?
                  <div style={{ display: isShowInputInfoSeft ? 'block' : 'none' }}>
                    <div>
                      <h3 style={{ marginBottom: '8px' }}> Thông tin học phí</h3>
                    </div>
                    <div>
                      <label>Trường học/ Trung tâm giáo dục bạn đăng ký</label>
                      <div style={{ background: '#E4E6EC', border: 'none', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>{school}</div>
                    </div>
                    <div>
                      <p>Hình thức học</p>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học trực tiếp tại lớp học' onChange={handleStudyType} checked={selectedStudyType === 'Học trực tiếp tại lớp học'} />
                        <label>Học trực tiếp tại lớp học</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học online' onChange={handleStudyType} checked={selectedStudyType === 'Học online'} />
                        <label>Học online</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học kết hợp online và trực tiếp' onChange={handleStudyType} checked={selectedStudyType === 'Học kết hợp online và trực tiếp'} />
                        <label>Học kết hợp online và trực tiếp</label>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <label>Ảnh chụp thông báo đóng học phí phát hành bởi Cơ sở giáo dục</label>
                      <SamplePhotosUploader
                        onDataChange={v => setAnhChup24(v)}
                        initialFiles={fileanhChup24}
                        setFiles={v => setFileanhChup24(v)}
                        setpreviewURL={v => setpreviewanhChup24(v)}
                      />
                      <p className={styles.note}>· Thể hiện rõ: Ngân hàng, Chi nhánh, Số tài khoản, Tên người thụ hưởng, Nội dung chuyển khoản.</p>
                    </div>
                    <div>
                      <span>Số tiền học phí cần trả góp</span>
                      <Input
                        type='number'
                        placeholder={'Số tiền học phí cần trả góp'}
                        name='amount'
                        value={amount}
                        className={styles.inputBox}
                        onChange={setAmountValue}
                        onBlur={validateAmount}
                      />
                      <div role='alert' className={styles.errorMsg}>{amountError}</div>
                      <p className={styles.note}>· Rootopia sẽ giải ngân học phí vào tài khoản của Cơ Sở Giáo Dục. Vui lòng KHÔNG nhập nhiều hơn số tiền trên thông báo học phí.</p>
                    </div>
                    <div>
                      <label>Kỳ hạn trả góp</label>
                      <InputSuggestion
                        type='text'
                        name='duration'
                        listId='durationList'
                        id='duration'
                        value={duration}
                        className={styles.suggestionInput}
                        placeholder={'Hãy chọn kỳ hạn trả'}
                        data={durationData}
                        onChange={handleChangeDuration}
                      />
                    </div>
                    <div>
                      <span>Mã giới thiệu trường</span>
                      <Input
                        type='number'
                        placeholder={'Mã giới thiệu trường'}
                        name='ambassador_code'
                        value={ambassador_code}
                        className={styles.inputBox}
                        onChange={setAmbassadorCodeValue}
                      />
                    </div>
                  </div>
                  :
                  null
              }
              {
                isShowInputInfoOthers ?
                  <div>
                    <div>
                      <div>
                        <span>Người đó là</span>
                        <Input
                          type='text'
                          placeholder={'Người đó là'}
                          name='other'
                          value={other}
                          className={styles.inputBox}
                          onChange={setotherValue}
                          onBlur={validateother}
                        />
                        <div role='alert' className={styles.errorMsg}>{otherError}</div>
                      </div>
                      <div className={styles.groupBox}>
                        <div className={styles.groupItemBox}>
                          <span>Họ tên của người học</span>
                          <Input
                            type='text'
                            placeholder={'Họ tên của người học'}
                            name='kidName'
                            value={kidName}
                            className={styles.inputBox}
                            onChange={setKidNameValue}
                            onBlur={validateKidName}
                          />
                          <div role='alert' className={styles.errorMsg}>{kidNameError}</div>
                        </div>
                        <div className={styles.groupItemBox}>
                          <span>Số điện thoại của người học (nếu có)</span>
                          <Input
                            type='number'
                            placeholder={'Số điện thoại của người học (nếu có)'}
                            name='kidPhone'
                            value={kidPhone}
                            className={styles.inputBox}
                            onChange={setKidPhoneValue}
                          />
                        </div>
                      </div>
                      <div className={styles.groupBox}>
                        <div className={styles.groupItemBox}>
                          <label>Hình chụp giấy khai sinh của người học</label>
                          <SamplePhotosUploader
                            onDataChange={v => setHinhChup71(v)}
                            initialFiles={fileHinhChup71}
                            setFiles={v => setFileHinhChup71(v)}
                            setpreviewURL={v => setpreviewHinhChup71(v)}
                          />
                        </div>
                        <div className={styles.groupItemBox}>
                          <label>Ảnh chụp chân dung người học</label>
                          <SamplePhotosUploader
                            onDataChange={v => setHinhChup72(v)}
                            initialFiles={fileHinhChup72}
                            setFiles={v => setFileHinhChup72(v)}
                            setpreviewURL={v => setpreviewHinhChup72(v)}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: '8px' }}> Thông tin học phí</h3>
                    </div>
                    <div>
                      <label>Trường học/ Trung tâm giáo dục bạn đăng ký</label>
                      <div style={{ background: '#E4E6EC', border: 'none', borderRadius: '8px', padding: '16px', margin: '8px 0' }}>{school}</div>
                    </div>
                    <div>
                      <p>Hình thức học</p>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học trực tiếp tại lớp học' onChange={handleStudyType} checked={selectedStudyType === 'Học trực tiếp tại lớp học'} />
                        <label>Học trực tiếp tại lớp học</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học online' onChange={handleStudyType} checked={selectedStudyType === 'Học online'} />
                        <label>Học online</label>
                      </div>
                      <div className={styles.radio}>
                        <input type="radio" name='studyType' value='Học kết hợp online và trực tiếp' onChange={handleStudyType} checked={selectedStudyType === 'Học kết hợp online và trực tiếp'} />
                        <label>Học kết hợp online và trực tiếp</label>
                      </div>
                    </div>
                    <div style={{ marginTop: '8px' }}>
                      <label>Ảnh chụp thông báo đóng học phí phát hành bởi Cơ sở giáo dục</label>
                      <SamplePhotosUploader
                        onDataChange={v => setAnhChup24(v)}
                        initialFiles={fileanhChup24}
                        setFiles={v => setFileanhChup24(v)}
                        setpreviewURL={v => setpreviewanhChup24(v)}
                      />
                      <p className={styles.note}>· Thể hiện rõ: Ngân hàng, Chi nhánh, Số tài khoản, Tên người thụ hưởng, Nội dung chuyển khoản.</p>
                    </div>
                    <div>
                      <span>Số tiền học phí cần trả góp</span>
                      <Input
                        type='number'
                        placeholder={'Số tiền học phí cần trả góp'}
                        name='amount'
                        value={amount}
                        className={styles.inputBox}
                        onChange={setAmountValue}
                        onBlur={validateAmount}
                      />
                      <div role='alert' className={styles.errorMsg}>{amountError}</div>
                      <p className={styles.note}>· Rootopia sẽ giải ngân học phí vào tài khoản của Cơ Sở Giáo Dục. Vui lòng KHÔNG nhập nhiều hơn số tiền trên thông báo học phí.</p>
                    </div>
                    <div>
                      <label>Kỳ hạn trả góp</label>
                      <InputSuggestion
                        type='text'
                        name='duration'
                        listId='durationList'
                        id='duration'
                        value={duration}
                        className={styles.suggestionInput}
                        placeholder={'Hãy chọn kỳ hạn trả'}
                        data={durationData}
                        onChange={handleChangeDuration}
                      />
                    </div>
                    <div>
                      <span>Mã giới thiệu trường</span>
                      <Input
                        type='number'
                        placeholder={'Mã giới thiệu trường'}
                        name='ambassador_code'
                        value={ambassador_code}
                        className={styles.inputBox}
                        onChange={setAmbassadorCodeValue}
                      />
                    </div>
                  </div>
                  :
                  null
              }
              <div style={{ marginTop: '8px' }}>
                <div>
                  <ul style={{ listStyleType: 'none' }}>
                    <li>· Nếu bạn là phụ huynh đăng ký cho con, vui lòng cung cấp số tham chiếu là vợ/chồng của bạn. </li>
                    <br />
                    <li>· Trong trường hợp đặc biệt hoặc bạn là học viên tự đứng tên, vui lòng cung cấp số tham chiếu là bố/mẹ hoặc anh/chị/em ruột.</li>
                  </ul>
                </div>
                <br />
                <div>
                  <p>Người thân đó là:</p>
                  <div className={styles.radio}>
                    <input type="radio" name='familyAre' value='Bố' onChange={handleFamilyAre} checked={selectedFamilyAre === 'Bố'} />
                    <label>Bố</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" name='familyAre' value='Mẹ' onChange={handleFamilyAre} checked={selectedFamilyAre === 'Mẹ'} />
                    <label>Mẹ</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" name='familyAre' value='Vợ/Chồng' onChange={handleFamilyAre} checked={selectedFamilyAre === 'Vợ/Chồng'} />
                    <label>Vợ/Chồng</label>
                  </div>
                  <div className={styles.radio}>
                    <input type="radio" name='familyAre' value='Anh/Chị/Em ruột' onChange={handleFamilyAre} checked={selectedFamilyAre === 'Anh/Chị/Em ruột'} />
                    <label>Anh/Chị/Em ruột</label>
                  </div>
                  <div className={styles.groupBox}>
                    <div className={styles.groupItemBox}>
                      <span>Họ và tên của người thân</span>
                      <Input
                        type='text'
                        placeholder={'Họ và tên của người thân'}
                        name='familyName'
                        value={familyName}
                        className={styles.inputBox}
                        onChange={setFamilyNameValue}
                        onBlur={validateFamilyName}
                      />
                      <div role='alert' className={styles.errorMsg}>{familyNameError}</div>
                    </div>
                    <div className={styles.groupItemBox}>
                      <span>Số điện thoại của người thân</span>
                      <Input
                        type='text'
                        placeholder={'Số điện thoại của người thân'}
                        name='familyPhone'
                        value={familyPhone}
                        className={styles.inputBox}
                        onChange={setFamilyPhoneValue}
                        onBlur={validateFamilyPhone}
                      />
                      <div role='alert' className={styles.errorMsg}>{familyPhoneError}</div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                text={'Tiếp tục'}
                className={styles.submitBtn}
                onClick={onClickNextPage4}
                disabled={false}
                loading={false}
              />
            </div>
          </div>
          <div style={{ display: isShowPage4 ? 'block' : 'none' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ width: '18px', cursor: 'pointer', margin: '0 8px' }}>
                <span
                  onClick={onClickBackPage3}
                >
                  <BackIcon color="#080C21" />
                </span>
              </div>
              <h3 className={styles.titlePages}>Kiểm tra thông tin</h3>

            </div>
            <div>
              <div style={{marginBottom: '80px'}}>
                <CheckInfo
                  isUsed={isUsed}
                  phone={phone}
                  email={email}
                  name={name}
                  address={address}
                  job={job}
                  company={company}
                  familyAre={familyAre}
                  familyName={familyName}
                  familyPhone={familyPhone}
                  whoAreYou={whoAreYou}
                  kidName={kidName}
                  kidPhone={kidPhone}
                  school={school}
                  studyType={studyType}
                  amount={amount}
                  duration={duration}
                  ambassador_code={ambassador_code}
                  anhChup={previewAnhChup}
                  anhChup135={previewAnhChup135}
                  anhBan={previewAnhBan}
                  hinhChup71={previewHinhChup71}
                  hinhChup72={previewHinhChup72}
                  anhChup24={previewanhChup24}
                />
                <Button
                  form='borrower-request-form'
                  text={'Đăng kí'}
                  className={styles.submitBtn}
                  onClick={handleSubmit}
                  disabled={false}
                  loading={isLoading}
                />
                {errorMessage && <div className={styles.errorPopup}>{errorMessage}</div>}
              </div>
            </div>
          </div>
          <div style={{ display: isShowPage5 ? 'block' : 'none' }}>
            <div>
              <div className={styles.imageWrapper}>
                <img className={styles.image} src="/Rootopia-logo.svg" alt="logo" />
              </div>
              <div className={styles.title}><span>Chào mừng bạn đến với <span style={{ color: '#F476A7' }}>Rootopia</span></span></div>
              <br />
              <div style={{display: 'flex', justifyContent: 'center',flexWrap:'wrap'}}>
                <div className={styles.imageWrapper}>
                  <img src="/image-submit-success.svg" alt="image-submit-success" />
                </div>
                  <div style={{ display: 'flex',justifyContent: 'center', marginTop: '32px', fontSize: 24, lineHeight: '32px' ,width: '100%'}}>Gửi yêu cầu thành công!</div>
                  <div style={{ display: 'flex',justifyContent: 'center', marginTop: '16px',marginBottom: '48px', fontSize: 16, lineHeight: '24px' ,width: '100%'}}>Cảm ơn bạn đã gửi yêu cầu tới Rootopia. Tư vấn viên sẽ liên hệ bạn trong vòng 24h.</div>
              </div>
            </div>
            <Button
                text={'Quay về trang chủ'}
                className={styles.submitBtn}
                onClick={onViewHomePage}
                disabled={false}
                loading={false}
              />
          </div>
        </form >
      </div >
    </>
  )
}