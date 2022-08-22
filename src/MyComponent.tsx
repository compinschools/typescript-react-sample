type Props = {
    title?: string,
    doSomething?: (a: any,b: any) => void;
  }

export default function MyComponent({title,doSomething} : Props) {
    return(
        
        <>
        { doSomething ? doSomething(1,2):undefined}
        {title}</>
    );
}