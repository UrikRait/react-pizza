export interface Imodal{
    bool?: boolean
    booleanState: React.Dispatch<React.SetStateAction<boolean>>
    setCard?: React.Dispatch<React.SetStateAction<{
        img: string,
        name: string,
        weight: string,
        size: string,
        canCreate: boolean
    }>>,


}
