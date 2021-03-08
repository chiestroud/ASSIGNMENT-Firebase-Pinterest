import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#modal-body').innerHTML = `<form id="submit-pin-form" class="mb-4">
                                                      <div class="form-group">
                                                        <label for="pinName">Pin Name</label>
                                                        <input type="text" class="form-control" id="pinName" aria-describedby="pinName" placeholder="Pin Name" required>
                                                      </div>
                                                      <div class="form-group">
                                                        <label for="title">Image URL</label>
                                                        <input type="url" class="form-control" id="pinUrl" aria-describedby="imageUrl" placeholder="Image URL" required>
                                                      </div>
                                                      <div class="form-group" id="select-board">
                                                        <label for="title">Select A Board</label>
                                                        <input type="url" class="form-control" id="boardId" aria-describedby="selectedBoard" placeholder="Select A Board" required>
                                                      </div>
                                                      <button type="submit" id="submit-pin" class="btn btn-primary">Submit Pin</button>
                                                    </form>`;
  selectBoard();
};

export default addPinForm;
