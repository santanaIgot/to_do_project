
interface TaskItemProps {
    content: string;
  }
export function TaskItem({content}: TaskItemProps) {
    return(
        <>
            <div className="">
                <h1>
                    {content}
                </h1>
            </div>
        </>
    )
}