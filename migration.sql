CREATE TABLE leads (
  id SERIAL primary key,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phoneNumber VARCHAR(50) NOT NULL 
)

ALTER TABLE leads ADD CONSTRAINT email_unique UNIQUE (email);
