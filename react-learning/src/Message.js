import react from 'react'

// 创建一个 button 组件
export const Button = ({ text, onClick }) => {
  return <button style={{margin: '0 0.5rem'}} onClick={onClick}>{text}</button>
}

const styleContainer = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25rem', // 400px
  height: '18.75rem', // 300px
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  borderRadius: '0.5rem',
  zIndex: 1000
}

const styleMask = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  zIndex: -1,
}

// 实现 Message 组件
export const Message = ({tips, buttons}) => {

  function renderMessage() {
    const tips = "操作成功！你可以 {$2} 或者 {$1}."
    const regex = /(\{\$\d+\})/g;
    const parts = tips.split(regex); // 文本分割
    const elem = parts.map(item => {
      if(item.match(regex)) {
        const index = +item.replace(/\D+/g, ''); // 获取下标位置
        const button = buttons[index - 1];
        return button
      }
      return item
    })
    return <div key={elem.text}>{elem.text}</div>
  }

  return (<div style={styleContainer}>
    <div style={styleMask}></div>
    <div>
      {renderMessage()}
    </div>
  </div>)
}
