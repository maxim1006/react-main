import React, { memo, useEffect, useRef } from 'react';
import './mouseover-mouseleave.component.scss';
import { generateUniqueId } from '@app/common/helpers/helpers';

let currentElem: HTMLElement | null = null;

const MouseoverMouseleave: React.FC = () => {
    const tableRef = useRef<HTMLTableElement>(null!);

    useEffect(() => {
        const tableElement = tableRef.current;

        tableElement.onmouseover = (event: Event) => {
            // перед тем, как войти на следующий элемент, курсор всегда покидает предыдущий
            // если currentElem есть, то мы ещё не ушли с предыдущего <td>,
            // это переход внутри - игнорируем такое событие
            if (currentElem) return;

            const target = (event.target as Element).closest('td');

            // переход не на <td> - игнорировать
            if (!target) return;

            // переход на <td>, но вне нашей таблицы (возможно при вложенных таблицах)
            // игнорировать
            if (!tableElement.contains(target)) return;

            // ура, мы зашли на новый <td>
            currentElem = target;
            target.style.background = 'pink';
        };

        tableElement.onmouseout = (event: MouseEvent) => {
            // если мы вне <td>, то игнорируем уход мыши
            // это какой-то переход внутри таблицы, но вне <td>,
            // например с <tr> на другой <tr>
            if (!currentElem) return;

            // мы покидаем элемент – но куда? Возможно, на потомка?
            let { relatedTarget }: any = event;

            while (relatedTarget) {
                // поднимаемся по дереву элементов и проверяем – внутри ли мы currentElem или нет
                // если да, то это переход внутри элемента – игнорируем
                if (relatedTarget === currentElem) return;

                relatedTarget = relatedTarget.parentNode;
            }

            // мы действительно покинули элемент
            currentElem.style.background = '';
            currentElem = null;
        };
    }, []);

    const tableView = {
        rows: Array.from({ length: 5 }, (row, index) => {
            const rowKey = generateUniqueId();
            return (
                <tr className='mouseover-mouseleave__row' key={rowKey}>
                    {Array.from({ length: 5 }, (cell, cellIndex) => {
                        const cellKey = generateUniqueId();
                        return (
                            <td className='mouseover-mouseleave__cell' key={cellKey}>
                                row: {index} cell {cellIndex}
                            </td>
                        );
                    })}
                </tr>
            );
        }),
    };

    return (
        <table ref={tableRef} className='mouseover-mouseleave__table'>
            <tbody>{tableView.rows}</tbody>
        </table>
    );
};

export default memo(MouseoverMouseleave);
