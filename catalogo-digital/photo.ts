import * as C from './sty';

type Props = {
    url: string;
    name: string;
    onDelete: (name: string) => void;
}

export const PhotoItem = ({ url, name }: Props) => {
    return (
        <C.Container>
            <img src={url} alt={name} />
            {name}
            
        </C.Container>
    );
}