import React from "react";


const articles = [
  {
    title: "The Importance of Blood Donation",
    excerpt: "Blood donation saves millions of lives every year. Learn how you can make a difference.",
    image: "https://www.chaudharyhospital.in/wp-content/uploads/2024/05/blood-donation-1140x628.png",
    link: "https://www.redcrossblood.org/local-homepage/news/article/blood-donation-importance.html"
  },
  {
    title: "Who Can Donate Blood? Eligibility & Guidelines",
    excerpt: "Find out if you are eligible to donate blood and understand the requirements.",
    image: "https://images.onlymyhealth.com/imported/images/2023/June/14_Jun_2023/Main-blooddonationeligibility.jpg",
    link: "https://www.who.int/campaigns/world-blood-donor-day/2018/who-can-give-blood"
  },
  {
    title: "The Blood Donation Process: Step-by-Step",
    excerpt: "A complete guide to what happens before, during, and after you donate blood.",
    image: "https://www.goodnet.org/photos/281x197/26772_hd.jpg",
    link: "https://www.hhs.gov/givingequalsliving/giveblood/giving-process"
  },
  {
    title: "How Often Can You Donate Blood?",
    excerpt: "Understanding donation frequency and how it affects your health.",
    image: "https://img.freepik.com/premium-photo/happy-mixed-race-couple-celebrating-success-colorful-background_116547-25767.jpg",
    link: "https://www.healthline.com/health/how-often-can-you-donate-blood"
  },
  {
    title: "Myths & Facts About Blood Donation",
    excerpt: "Clearing up common misconceptions about blood donation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHgpin4MVp09up-K35UMV-7csQn6ERRk9SCw&s",
    link: "https://www.financialexpress.com/business/healthcare-myths-and-misconceptions-about-blood-donations-2560447/"
  },
  {
    title: "How Blood Donation Helps in Emergencies",
    excerpt: "Real-life cases where donated blood has saved lives.",
    image: "https://www.thehealthy.com/wp-content/uploads/2019/01/13-Things-You-Should-Know-Before-Donating-Blood-4.jpg",
    link: "https://www.redcrossblood.org/donate-blood/how-to-donate/how-blood-donations-help.html"
  }
];

const ArticlePage = () => {
  return (
    <div className="container">
      
      <div className="featured-article">
        <img src={articles[0].image} alt={articles[0].title} className="featured-image" />
        <div className="featured-content">
          <h2>{articles[0].title}</h2>
          <p>{articles[0].excerpt}</p>
          <a href={articles[0].link} className="read-more">Read More →</a>
        </div>
      </div>
      
      {/* Smaller Articles */}
      <div className="article-grid">
        {articles.slice(1).map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} className="article-image" />
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <a href={article.link} className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
