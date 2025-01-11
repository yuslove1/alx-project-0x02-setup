import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p>{content}</p>
            <p>AuthorId: {userId}</p>
        </div>
    )
}

export default PostCard;