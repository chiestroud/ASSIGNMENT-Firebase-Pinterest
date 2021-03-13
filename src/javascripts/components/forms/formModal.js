const formModal = (modalTitle) => {
  document.querySelector('#main').innerHTML = `
  <div class="modal fade" id="formModal" tabindex="-1" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true" width="1250px;">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content text-dark">
        <div class="modal-header">
          <h5 class="modal-title" id="formModalLabel">${modalTitle}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" id="closeModal">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="modal-body">
        </div>
      </div>
    </div>
  </div>`;
};

export default formModal;
