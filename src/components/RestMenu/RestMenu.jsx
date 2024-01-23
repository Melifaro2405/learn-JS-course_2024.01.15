export const RestMenu = ({ menuItems }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menuItems.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </>
  );
};
