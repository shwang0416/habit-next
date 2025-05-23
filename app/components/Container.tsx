const Container = ({ children, styles }: { children: React.ReactNode, styles?: string }) => {
  return <div className={`container mx-auto ${styles}`}>{children}</div>;
};

export default Container;

