import React, { useState, useEffect } from "react";
import axios from "axios";

const Infos = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1337/api/Articles?populate=*");
        const responseData = response.data.data;

        if (Array.isArray(responseData)) {
          const articlesWithImages = responseData.map((article, index) => ({
            ...article,
            image: { url: `http://example.com/image${index + 1}.jpg` },
            showDescription: false,
          }));

          setArticles(articlesWithImages);
        } else {
          console.error("Invalid data format:", responseData);
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  const toggleDescription = (articleIndex) => {
    setArticles((prevArticles) =>
      prevArticles.map((article, index) =>
        index === articleIndex ? { ...article, showDescription: !article.showDescription } : article
      )
    );
  };

  const filteredArticles = articles.filter((article) =>
    article.attributes.Titre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cherchez un article"
          className="p-2 md:p-3 border rounded-md w-full focus:outline-none focus:border-black"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {filteredArticles.map((article, index) => (
          <div key={article.id} className="bg-white p-4 rounded-md shadow-md">
            <div className="flex justify-between">
              <div>
                <h2 className="text-lg font-bold">{article.attributes.Titre}</h2>
              </div>
              <button onClick={() => toggleDescription(index)} className="font-bold">
                Cliquez pour voir l'article ↩︎
              </button>
            </div>
            <div className="p-4">
              {article.showDescription && (
                <p className="text-sm text-gray-700">{article.attributes.Description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infos;
