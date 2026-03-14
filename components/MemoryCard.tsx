type MemoryCardProps = {
  title: string;
  description: string;
  videoUrl?: string;
};

export default function MemoryCard({
  title,
  description,
  videoUrl,
}: MemoryCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      {videoUrl && (
        <video controls src={videoUrl} width="100%">
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}
