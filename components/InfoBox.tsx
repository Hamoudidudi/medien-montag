type InfoBoxProps = {
  title: string;
  children: React.ReactNode;
  type?: "info" | "warning";
};

export default function InfoBox({ title, children, type = "info" }: InfoBoxProps) {
  return (
    <div className={`mm-box mm-box-${type}`}>
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
