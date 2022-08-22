type Props = {
    name?: string
  }

export default function MeComponent({name} : Props) {
    return(
        <>{name}</>
    );
}