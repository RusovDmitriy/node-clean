SET search_path TO pg_catalog,public;

CREATE TABLE public.users(
	id serial NOT NULL,
	email varchar(256) NOT NULL,
	password varchar(64) NOT NULL,
	role varchar(16) NOT NULL,
	created timestamp NOT NULL,
	updated timestamp NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE UNIQUE INDEX users_email_unique ON public.users
	USING btree
	(
	  email ASC NULLS LAST
	);
