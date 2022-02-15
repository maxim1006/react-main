export default function Post({ title, body, index }) {
    return (
        <div>
            <h3>
                Post:
                {index}
            </h3>
            <p>
                <b>{title}</b>
            </p>
            <p>{body}</p>
        </div>
    );
}
