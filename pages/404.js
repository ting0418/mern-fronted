import Link from "next/link";
export default function Custom404() {
  return (
    <>
      <div className="error-page">
        <div>
          <h1 data-h1="404">404</h1>
          <p data-p="NOT FOUND">NOT FOUND</p>
        </div>
      </div>
    </>
  );
}
