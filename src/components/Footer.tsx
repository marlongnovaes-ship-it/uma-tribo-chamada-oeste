export default function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-8 mt-20">
      <div className="container mx-auto px-4 text-center space-y-4">
        <h3 className="text-xl font-bold">Uma Tribo Chamada Oeste © {new Date().getFullYear()}</h3>
        <p className="text-amber-200">
          Fan tribute inspirado em <strong>Life is Strange 2</strong>
        </p>
        <p className="text-sm text-amber-300">
          Life is Strange™ é marca registrada da Square Enix Co., Ltd.<br />
          Este é um projeto de fã não oficial e não comercial.
        </p>
      </div>
    </footer>
  );
}
