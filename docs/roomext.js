/**
 * @api {get} /roomext/ Read all data of a roomext
 * @apiVersion 1.1.0
 * @apiName getAll
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads roomext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomext/
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsroomext          Description
 * @apiSuccess {varchar}     dshardware          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsroomext": "", 
 *       "dshardware": "", 
 *       "idclient": "", 
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
 * @api {get} /roomext/:id Read data of a roomext by id
 * @apiVersion 1.1.0
 * @apiName getById
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads roomext data
 *
 * @apiParam {String} id The roomext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomext/4711
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsroomext          Description
 * @apiSuccess {varchar}     dshardware          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsroomext": "", 
 *       "dshardware": "", 
 *       "idclient": "", 
 *       "active": "", 
 *       "createdat": "", 
 *       "updatedat": "", 
   
 *     }
 *
 * @apiUse GenericError
 */
function getById() { return; }

/**
 * @api {get} /roomext/ Search data of a roomext by passed parameters
 * @apiVersion 1.1.0
 * @apiName search
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
 * @apiDescription This route reads roomext data
 *
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomextsearch/?filter={Text to Filter}&sortOrder={asc/desc}&pageNumber={Page Number}&pageSize={Page Size}
 *
 * @apiSuccess {int4}     id          Description
 * @apiSuccess {varchar}     dsroomext          Description
 * @apiSuccess {varchar}     dshardware          Description
 * @apiSuccess {int4}     idclient          Description
 * @apiSuccess {bool}     active          Description
 * @apiSuccess {timestamptz}     createdat          Description
 * @apiSuccess {timestamptz}     updatedat          Description

 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
       *       "id": "", 
 *       "dsroomext": "", 
 *       "dshardware": "", 
 *       "idclient": "", 
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
 * @api {post} /roomext Create a new roomext record
 * @apiVersion 1.1.0
 * @apiName add
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
 * @apiDescription This Route is used to add new record to the roomext 
 * 
 * @apiParam {varchar}     dsroomext          Description
 * @apiParam {varchar}     dshardware          Description
 * @apiParam {int4}     idclient          Description
 * @apiParam {bool}     active          Description

 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomext/
 *
 * 
 *
 * @apiUse GenericError
 */
function add() { return; }

/**
 * @api {put} /roomext/:id Update the roomext data by Id
 * @apiVersion 1.1.0
 * @apiName update
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
{DOCParamReqPut}
 *
 * @apiDescription This Route is used to update data to the roomext 
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomext/
 *
 * 
 *
 * @apiUse GenericError
 */
function update() { return; }


/**
 * @api {delete} /roomext/:id  Delete data of a roomext by ID
 * @apiVersion 1.1.0
 * @apiName remove
 * @apiGroup roomext
 * @apiPermission Token Validation
 *
 * @apiDescription This route remove a record from roomext
 *
 * @apiParam {Number} id The roomext-ID.
 *
 * @apiExample Example usage:
 * curl https://{HostAddres}/api/v1/roomext/
 *
 * 
 *
 * @apiUse GenericError
 */
function remove() { return; }

