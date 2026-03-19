export function ButtonLink({ href, children, variant = 'primary' }) {
  const styles = {
    primary:
      'px-3.5 sm:px-6 py-2 border border-brand text-brand rounded hover:bg-brand hover:text-black transition',
    secondary:
      'px-3.5 sm:px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition',
  };

  return (
    <a href={href} target="_blank" className={styles[variant]}>
      {children}
    </a>
  );
}
