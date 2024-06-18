import React from "react";
import ArticleList from "./ArticleList";

export function Homepage( {filterTopic}) {
return (
    <main>
     <ArticleList filterTopic={filterTopic} />
    </main>
)
}