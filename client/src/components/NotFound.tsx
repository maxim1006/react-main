export type NotFoundProps = {
    children?: React.ReactNode;
};

export default function NotFound({ children }: NotFoundProps) {
    return children || <div>Page not found</div>;
}
