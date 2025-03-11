

function DiaryEntry({ entry }) {
  return (
    <div>
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
}

export default DiaryEntry;