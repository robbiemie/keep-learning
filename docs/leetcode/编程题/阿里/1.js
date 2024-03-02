/*
 * 解读程序,写处console.log打印出来的内容
 */

let i = 0;

const Test = () => {
  
  const [count, setCount] = useState(0);


  useEffect(() => {
    
    setInterval(() => {
      setCount(count+1);
    }, 1000);
    
  }, []);
  

  console.log(`${++i} - ${count}`);


  return <span>{`${i} - ${count}`}</span>;
};

//请在此处写出console.log输出的内容
