import "./homepage.css";
function homepage(){
    return (
        <div className="App">
          <header className="App-header">
              <div className="logo">
                <img src="/images/logo1.png" alt="logo" className="img-logo"/>
                <p>ActiveVibe</p>
              </div>
              <input type="text" placeholder="O que você procura?" className="search"/>
            <nav className="nav">
              <div>
                <img src="" alt="pessoa" />
                <p>cadastrar</p>
              </div>
              <img src="" alt="carrinho" />

            </nav>
          </header>
          <img src="/images/sport.png" alt="esporte" />
            <p>Encontre os melhores equipamentos esportivos para suas atividades favoritas!</p>
          <section id="featured" className="featured-products">
            <h2>Produtos em Destaque</h2>
            <div className="product-grid">
              <div className="product-card">
                <img src="caminho-da-imagem1" alt="Nome do Produto 1" />
                <h3>Nome do Produto 1</h3>
                <p>Descrição do produto 1.</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              <div className="product-card">
                <img src="caminho-da-imagem2" alt="Nome do Produto 2" />
                <h3>Nome do Produto 2</h3>
                <p>Descrição do produto 2.</p>
                <button>Adicionar ao Carrinho</button>
              </div>
              {/* Adicione mais produtos conforme necessário */}
            </div>
          </section>
          <section id="categories" className="popular-categories">
            <h2>Categorias Populares</h2>
            <div className="category-grid">
              <div className="category-card">
                <img src="caminho-do-icone1" alt="Nome da Categoria 1" />
                <h3>Nome da Categoria 1</h3>
                <p>Explore nossa seleção de produtos nesta categoria.</p>
                <button>Ver Produtos</button>
              </div>
              <div className="category-card">
                <img src="caminho-do-icone2" alt="Nome da Categoria 2" />
                <h3>Nome da Categoria 2</h3>
                <p>Explore nossa seleção de produtos nesta categoria.</p>
                <button>Ver Produtos</button>
              </div>
              {/* Adicione mais categorias conforme necessário */}
            </div>
          </section>
          <section id="contact" className="contact-form">
            <h2>Entre em Contato</h2>
            <form>
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" required></textarea>
              <button type="submit">Enviar Mensagem</button>
            </form>
          </section>
          <footer className="App-footer">
            <p>&copy; 2024 Loja de Esportes</p>
          </footer>
        </div>
      );
}
export default homepage;