export interface Icard{
    setCard: React.Dispatch<React.SetStateAction<{
        img: string,
        name: string,
        weight: string,
        size: string
    }>>,
}