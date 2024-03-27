export function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>Hey please start adding something in your list bro 🚀 </em>
      </p>
    );

  const numItems = items.length;

  const numPacked = items.filter((item) => item.packed).length;

  const percentagePacked = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {Number(numItems) !== Number(numPacked)
          ? `You have ${numItems} items on List and the ${percentagePacked}% are packed`
          : "You are good to GO Sir ✈️🛩️ , Enjoy your time "}
      </em>
    </footer>
  );
}
