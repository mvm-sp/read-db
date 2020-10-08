/**
 * @api {get} /accuser/ Read all data of a accuser
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accuser data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accuser/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsfirstname          Description
 * @apiSuccess {varchar}     dslastname          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {varchar}     dspass          Description
 * @apiSuccess {date}     dtlastpass          Description
 * @apiSuccess {int4}     qtvalidpass          Description
 * @apiSuccess {bool}     isremoteuser          Description
 * @apiSuccess {varchar}     cdipaddress          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsfirstname": "", 
 *       "dslastname": "", 
 *       "dsemailuser": "", 
 *       "dspass": "", 
 *       "dtlastpass": "", 
 *       "qtvalidpass": "", 
 *       "isremoteuser": "", 
 *       "cdipaddress": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function getAll() { return; }

/**
 * @api {get} /accuser/:id Read data of a accuser by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accuser data
 *
 * @apiParam {String} id The accuser-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accuser/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsfirstname          Description
 * @apiSuccess {varchar}     dslastname          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {varchar}     dspass          Description
 * @apiSuccess {date}     dtlastpass          Description
 * @apiSuccess {int4}     qtvalidpass          Description
 * @apiSuccess {bool}     isremoteuser          Description
 * @apiSuccess {varchar}     cdipaddress          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsfirstname": "", 
 *       "dslastname": "", 
 *       "dsemailuser": "", 
 *       "dspass": "", 
 *       "dtlastpass": "", 
 *       "qtvalidpass": "", 
 *       "isremoteuser": "", 
 *       "cdipaddress": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /accuser/ Search data of a accuser by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads accuser data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accusersearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsfirstname          Description
 * @apiSuccess {varchar}     dslastname          Description
 * @apiSuccess {varchar}     dsemailuser          Description
 * @apiSuccess {varchar}     dspass          Description
 * @apiSuccess {date}     dtlastpass          Description
 * @apiSuccess {int4}     qtvalidpass          Description
 * @apiSuccess {bool}     isremoteuser          Description
 * @apiSuccess {varchar}     cdipaddress          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsfirstname": "", 
 *       "dslastname": "", 
 *       "dsemailuser": "", 
 *       "dspass": "", 
 *       "dtlastpass": "", 
 *       "qtvalidpass": "", 
 *       "isremoteuser": "", 
 *       "cdipaddress": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 * 
 */
function search() { return; }

/**
 * @api {post} /accuser Create a new accuser record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the accuser 
 * 
 * @apiParam {varchar}     dsfirstname          Description
 * @apiParam {varchar}     dslastname          Description
 * @apiParam {varchar}     dsemailuser          Description
 * @apiParam {varchar}     dspass          Description
 * @apiParam {date}     dtlastpass          Description
 * @apiParam {int4}     qtvalidpass          Description
 * @apiParam {bool}     isremoteuser          Description
 * @apiParam {varchar}     cdipaddress          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accuser/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /accuser/:id Update the accuser data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the accuser 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accuser/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /accuser/:id  Delete data of a accuser by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup accuser
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from accuser
 *
 * @apiParam {Number} id The accuser-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/accuser/
 *
 * @apiUse TransactionSuccess
 *
 * @apiUse GenericError
 */
function remove() { return; }

