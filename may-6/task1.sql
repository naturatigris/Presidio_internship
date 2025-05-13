use pubs
SELECT title FROM titles;
SELECT royalty FROM titles order by pubdate asc;


SELECT title FROM titles where  pub_id = '1389';;
Select title FROM titles where price between 10 and 15;
SELECT title FROM titles WHERE price IS NULL;
SELECT title FROM titles WHERE LEFT(title,3)='The';
SELECT title FROM titles WHERE title like 'The%';
SELECT title FROM titles WHERE title not like '%v%';
select title from titles order by royalty asc;
SELECT title, pub_id, type, price FROM titles ORDER BY pub_id DESC, type ASC, price DESC;
 select avg(price) as average_price ,type from titles group by type;
select  distinct type from titles;

WITH RankedTitles AS (
    SELECT title, price, RANK() OVER (ORDER BY price DESC) AS rank
    FROM titles
)
SELECT title, price
FROM RankedTitles
WHERE rank <= 2;

SELECT title,type,price,advance FROM titles where  type = 'business' and price<20 and advance>7000;
select CONCAT(au_lname,au_fname) as name from authors where state='CA';
select count(au_id) as athors , state from authors group by state;
SELECT p.pub_id, count(title) no_of_books 
FROM titles inner Join publishers p on titles.pub_id=p.pub_id 
GROUP BY p.pub_id HAVING count(title)>2 
ORDER BY count(title);

SELECT pub_id, COUNT(*) AS book_count
FROM titles
WHERE price BETWEEN 15 AND 25
  AND title LIKE '%It%'
GROUP BY pub_id
HAVING COUNT(*) > 2
ORDER BY book_count ASC;

