CREATE OR REPLACE FUNCTION prGetaccuser(pid int)
RETURNS TABLE (id int4, dsfirstname varchar, dslastname varchar, dsemailuser varchar, dspass varchar, dtlastpass date, qtvalidpass int4, isremoteuser bool, cdipaddress varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsfirstname, dslastname, dsemailuser, dspass, dtlastpass, qtvalidpass, isremoteuser, cdipaddress, active, createdat, updatedat
	from accuser
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostaccuser(pdsfirstname varchar, pdslastname varchar, pdsemailuser varchar, pdspass varchar, pdtlastpass date, pqtvalidpass int4, pisremoteuser bool, pcdipaddress varchar)
RETURNS void AS $$
BEGIN	
	insert into accuser(dsfirstname, dslastname, dsemailuser, dspass, dtlastpass, qtvalidpass, isremoteuser, cdipaddress) values (ppppppppdsfirstname, dslastname, dsemailuser, dspass, dtlastpass, qtvalidpass, isremoteuser, cdipaddress);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutaccuser(pId int4, pdsfirstname varchar, pdslastname varchar, pdsemailuser varchar, pdspass varchar, pdtlastpass date, pqtvalidpass int4, pisremoteuser bool, pcdipaddress varchar, pactive bool)
RETURNS void AS $$
begin
	update accuser 
	set dsfirstname = pdsfirstname, dslastname = pdslastname, dsemailuser = pdsemailuser, dspass = pdspass, dtlastpass = pdtlastpass, qtvalidpass = pqtvalidpass, isremoteuser = pisremoteuser, cdipaddress = pcdipaddress, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteaccuser(pid int)
RETURNS void AS $$
begin
	delete from accuser 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;