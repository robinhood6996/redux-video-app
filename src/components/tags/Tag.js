export default function Tag({ tag = {} }) {
    const { id, title } = tag;
    return (
        <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer">
            {title}
        </div>
    );
}
