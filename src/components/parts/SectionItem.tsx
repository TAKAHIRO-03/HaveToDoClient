const SectionItem = (args: {
  title: string;
  subtitle: string;
  dark: boolean;
  id: string;
}) => {
  return (
    <div className={"section" + (args.dark ? " section-dark" : "")}>
      <div className="section-content" id={args.id}>
        <h1>{args.title}</h1>
        <p>{args.subtitle}</p>
      </div>
    </div>
  );
};

export default SectionItem;
